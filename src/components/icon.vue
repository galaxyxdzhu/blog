<template>
    <svg :class="['svg_icon', className]" v-on="$listeners">
        <use :xlink:href="`#${icon_name}`"></use>
    </svg>
</template>

<script>
export default {
    name: 'svgIcon',
    props: {
        iconName: {
            type: String,
            required: true
        },
        className: {
            type: String
        },
    },
    data() {
        return {
            
        }
    },
    computed: {
        icon_name() {
            return `Icon-${this.iconName}`
        },
    }
}
</script>

<style>

</style>