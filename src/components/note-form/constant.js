
export const NOTE_FORM_VALIDATORS = {
    title: (newTitle) => {
        if (newTitle?.length < 3) {
            return "The title must be at least 3 characters long";
        } else if (newTitle?.length > 20) {
            return "The title can't exceed 20 characters";
        }
        return null;
    },
    content: (newContent) => {
        if (newContent?.length < 3) {
            return "The content must be at least 3 characters long";
        }
        return null;
    },
};
