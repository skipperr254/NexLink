import { defineType, defineField } from "sanity";

export const saveType = defineType({
    name: 'save',
    title: 'Save',
    type: 'document',
    fields: [
        defineField({
            name: 'postedBy',
            title: 'Posted By',
            type: 'postedBy'
        }),
        defineField({
            name: 'userId',
            title: 'User ID',
            type: 'string'
        })
    ]
})