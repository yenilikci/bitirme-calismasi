import { mount } from '@vue/test-utils';
import Homepage from './Homepage';

describe('Spec Homepage', function() {
    it('mounts', () => {
        const wrapper = mount(Homepage);
        expect(wrapper)
            .toBeTruthy();
    });
});
