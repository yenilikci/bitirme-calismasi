import { mount } from '@vue/test-utils';
import Statuscard from './StatusCard';

describe('Spec Statuscard', function() {
    it('mounts', () => {
        const wrapper = mount(Statuscard);
        expect(wrapper)
            .toBeTruthy();
    });
});
