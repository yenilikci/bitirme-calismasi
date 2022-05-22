import { mount } from '@vue/test-utils';
import Login from './Login';

describe('Spec Login', function() {
    it('mounts', () => {
        const wrapper = mount(Login);
        expect(wrapper)
            .toBeTruthy();
    });
});
