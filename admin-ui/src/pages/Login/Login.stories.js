import Login from './Login.vue';

export default {
    title: 'Login',
    component: Login,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Login },
    template: `<Login v-bind="$props" />`,
});
