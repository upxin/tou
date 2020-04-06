export const likeLoading = {
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 300);
    }
};
