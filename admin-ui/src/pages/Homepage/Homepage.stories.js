import Homepage from './Homepage.vue';

export default {
    title: 'Homepage',
    component: Homepage,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Homepage },
    template: `<Homepage v-bind="$props" />`,
});
