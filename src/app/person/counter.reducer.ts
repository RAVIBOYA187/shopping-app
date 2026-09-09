// import { createReducer, on, } from "@ngrx/store";
// import { CounterState, initialState } from "./counter.state";
// import { decrement, increment, reset } from "./counter.actions";


// export const counterReducer = createReducer(initialState,
//     on(increment, (state) => {
//         console.log(state);
//         return { ...state, count: state.count + 1 }
//     }),
//     on(decrement, (state) => {
//         console.log(state);

//         return { ...state, count: state.count - 1 }
//     }),
//     on(reset, (state) => {
//         console.log(state);

//         return { ...state, count: 0 }
//     })
// );

import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { increment, decrement, reset } from './counter.actions';

export const counterReducer = createReducer(
    initialState,

    on(increment, state => {
        console.log(state.count);
        return {
            ...state,
            count: state.count + 1
        }
    }),

    on(decrement, state => {
        console.log(state.count);
        return {
            ...state,
            count: state.count - 1
        }
    }),

    on(reset, state => {
        console.log(state.count);
        return {
            ...state,
            count: 0
        }
    })
);