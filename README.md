# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## ts/html은 한세트로 작동함
html은 화면레이아웃 템플릿
ts는 기능넣음

이중 중괄호({{}})는 Angular가 제공하는 문자열 바인딩(interpolation binding) 문법

## ng generate component [ component 명 ]
ng generate component heroes를 app-root에서 실행하면 "src > app > heroes" 경로가 생성됨

## 컴포넌트 내용
ngOnInit은 라이프싸이클 후킹 함수 입니다. Angular는 컴포넌트를 생성한 직후에 ngOnInit를 호출합니다. 그래서 컴포넌트를 초기화하는 로직은 이 메소드에 작성하는 것이 좋습니다.

## Study 
튜토리얼 > 4.서비스 추가하기 > 메시지 표시하기 부터 시작