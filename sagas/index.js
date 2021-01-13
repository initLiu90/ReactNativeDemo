import {all, call, delay, fork} from 'redux-saga/effects';

function request(resource) {
  return fetch('https://wanandroid.com/wxarticle/chapters/json').then(
      response => response.json(),
  );
}

function* fetchResource1() {
  // const {data} = yield call(request, resource);
  console.log('1111 start');
  yield delay(1000);
  console.log('1111');
}

function* fetchResource2() {
  // const {data} = yield call(request, resource);
  console.log('222 start');
  yield delay(2000);
  console.log('222');
}

function* fetchResource3() {
  // const {data} = yield call(request, resource);
  console.log('333 start');
  yield delay(3000);
  console.log('333');
}

const nonStopFork = generator => {
  return fork(function* () {
    while (true) {
      try {
        yield call(generator);
        break;
      } catch (error) {
      }
    }
  });
};

export function* main() {
  yield all([
    nonStopFork(fetchResource1),
    nonStopFork(fetchResource2),
    nonStopFork(fetchResource3),
  ]);
}
