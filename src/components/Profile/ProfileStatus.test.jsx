import ProfileStatus from './ProfileStatus';
import {create} from 'react-test-renderer';

describe('ProfileStatus component', () => {
    test('span should be when component was rendered', () => {
        const component = create(<ProfileStatus status='new status'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.length).not.toBeNull();
    });

    test('input should not be when component was rendered', () => {
        const component = create(<ProfileStatus status='new status'/>);
        const root = component.root;
        expect(() => root.findByType('input')).toThrow();
    });

    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='new status'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('new status');
    });

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='new status'/>);
        const root = component.root;
        let span = root.findByType('span');

        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('new status');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='new status' updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
