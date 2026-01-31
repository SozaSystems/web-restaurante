import { createSlice } from '@reduxjs/toolkit';

const getInitialView = () => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('menu')) return 'menu';
    if (path.includes('delivery')) return 'delivery';
    if (path.includes('contact') || path.includes('contacto')) return 'contact';
    return 'home';
};

const initialState = {
    currentView: getInitialView(),
};

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        navigateTo: (state, action) => {
            state.currentView = action.payload;
        },
    },
});

export const { navigateTo } = navigationSlice.actions;

export default navigationSlice.reducer;
