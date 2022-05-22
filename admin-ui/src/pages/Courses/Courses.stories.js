import Courses from './Courses.vue';

export default {
    title: 'Courses',
    component: Courses,
};

export const Default = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Courses },
    template: `<Courses v-bind="$props" />`,
});
