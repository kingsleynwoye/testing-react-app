import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../todo";

afterEach(() => {
    cleanup();
});

test('Should render non-component todo', () => {
    const todo = { id: 1, title: "Leaning react testing in react", completed: false };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId("todo-1");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("Leaning react testing in react");
    expect(todoElement).not.toContainHTML('<strike>');
});

test('Should render component todo', () => {
    const todo = { id: 2, title: "I have learn react", completed: true };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId("todo-2");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("I have learn react");
    expect(todoElement).not.toContainHTML('<strike>');
});

test('matches snapshot', () => {
    const todo = { id: 1, title: "Leaning react testing in react", completed: false };
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    expect(tree).toMatchSnapshot();
});