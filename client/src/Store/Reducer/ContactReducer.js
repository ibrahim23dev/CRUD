import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api/api';

export const Create = createAsyncThunk(
  'contact/Create',
  async (contact, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await Api.post('/create', contact, { withCredentials: true });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const Update = createAsyncThunk(
  'contact/Update',
  async (contactId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await Api.post(`/update/${contactId}`, {}, { withCredentials: true });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const Read = createAsyncThunk(
  'contact/Read',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await Api.get('/read', { withCredentials: true });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const contactReducer = createSlice({
  name: 'contact',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    contacts: [],
    contact: '',
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = '';
      state.successMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Create.pending, (state) => {
        state.loader = true;
      })
      .addCase(Create.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(Create.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
      })
      .addCase(Read.fulfilled, (state, { payload }) => {
        state.contact = payload.contact;
      })
      .addCase(Update.pending, (state) => {
        state.loader = true;
      })
      .addCase(Update.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(Update.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.contact = payload.contact;
        state.successMessage = payload.message;
      });
  },
});

export const { messageClear } = contactReducer.actions;
export default contactReducer.reducer;
