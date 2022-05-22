import { mount } from '@vue/test-utils';
import Courses from './Courses';

describe('Spec Courses', function() {
    it('mounts', () => {
        const wrapper = mount(Courses);
        expect(wrapper)
            .toBeTruthy();
    });
});
