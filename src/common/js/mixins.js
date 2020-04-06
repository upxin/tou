export const likeLoading = {
    activated() {
        setTimeout(() => {
            this.isLoading = false;
        }, 200);
    },
    deactivated() {
        setTimeout(() => {
            this.isLoading = true;
        }, 200);
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 300);
    }
};
