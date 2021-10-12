import {screen,render} from "@testing-library/react";
import Test from '../pages/test';
test("Intrail  test",() =>{
    render(
    <Test date="2021-09-29" />
    );
    expect(screen.getByTestId('resultofdate').textContent).toBe("(Intrail)");
})
//Please pass current or tommorrow date else you get error (intrail)
test("Not Started  test",() =>{
    render(
    <Test date="2021-10-12" />
    );
    expect(screen.getByTestId('resultofdate').textContent).toBe("(Not Started)");
})
test("Expired  test",() =>{
    render(
    <Test date="2021-09-23" />
    );
    expect(screen.getByTestId('resultofdate').textContent).toBe("(Expired)");
})
// for all test 
// package.json PLEASE YOU REPLACE THIS
// test:"cypress open"
// npm run