import Navbar from './Navbar.vue';

export default {
    title: 'Navbar',
    component: Navbar,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Navbar },
    template: `<Navbar v-bind="$props" />`,
});
