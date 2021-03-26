export const ActionTypes = {
    SETLOCALE: 'app/set-locale',
};

export const setLocale = (locale) => ({
    type: ActionTypes.SETLOCALE,
    payload: locale,
});

export const initialState = Object.freeze({
    locale: 'en_US',
});

export default (state = initialState, action) =>
(state, (draft) => {
    switch (action.type) {
        case ActionTypes.SETLOCALE: {
            draft.locale = action.payload;
            return;
        }
    }
});
