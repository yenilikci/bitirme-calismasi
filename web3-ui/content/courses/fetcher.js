import courses from './index.json';
import blogs from './blogs.json';

export const getAllCourses = () => {
    return {
        data: courses,
        courseMap: courses.reduce((a, c, i) => {
            a[c.id] = c;
            a[c.id].index = i;
            return a;
        }, {})
    }
}

export const getAllBlogs = () => {
    return {
        data: blogs,
        blogsMap: blogs.reduce((a, c, i) => {
            a[c.id] = c;
            a[c.id].index = i;
            return a;
        }, {})
    }
}
