import Statuscard from './StatusCard.vue';

export default {
    title: 'Statuscard',
    component: Statuscard,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Statuscard },
    template: `<StatusCard v-bind="$props" />`,
});
