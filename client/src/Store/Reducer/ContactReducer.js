import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Api from '../../Api/api'
export const Create= createAsyncThunk(
    'contact/Create',
    async (contact, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await Api.post('/product-add', contact, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const Update = createAsyncThunk(
    'contact/Update',
    async (contactId,{ rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await Api.post(`/update/${contactId}`,{ withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const Read= createAsyncThunk(
    'contact/Read',
    async (contact, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await Api.get('/read', contact,{ withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)




export const contactReducer = createSlice({
        name: 'contact',
        initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        contacts: [],
        contact: ''
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
    },
    extraReducers: {
        [Create.pending]: (state, _) => {
            state.loader = true
        },
        [Create.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [Create.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successMessage = payload.message
        },
        
        [Read.fulfilled]: (state, { payload }) => {
            state.contact = payload.contact
        },
        [Update.pending]: (state, _) => {
            state.loader = true
        },
        [Update.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [Update.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.contact = payload.contact
            state.successMessage = payload.message
        },
    }

})
export const { messageClear } = contactReducer.actions
export default contactReducer.reducer