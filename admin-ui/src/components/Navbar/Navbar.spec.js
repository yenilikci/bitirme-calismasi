import { mount } from '@vue/test-utils';
import Navbar from './Navbar';

describe('Spec Navbar', function() {
    it('mounts', () => {
        const wrapper = mount(Navbar);
        expect(wrapper)
            .toBeTruthy();
    });
});
