import { defineField, defineType } from "sanity";

export const userType = defineType({
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'string'
        })
    ]
})