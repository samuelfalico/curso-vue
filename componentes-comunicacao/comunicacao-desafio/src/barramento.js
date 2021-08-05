import Vue from 'vue'
export default new Vue({
    methods: {
        selectedLine(usuario) {
            this.$emit('selectedLine', usuario)
        },
        returnLine(callback) {
            this.$on('selectedLine', callback)
        }
    }
})