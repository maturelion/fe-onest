import React, { useEffect } from "react";
import {
  CreateAdsForm,
  CreateAdsFormInput,
  CreateAdsFormLabel,
  CreateAdsFormSelect,
  CreateAdsFormTextArea,
  CreateAdsStyle,
  FormWrapper,
} from "./CreateAds.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  getCities,
  getCountries,
  getStates,
} from "../../feature/location/LocationActions";
import Button from "../../components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateAds = () => {
  const dispatch = useDispatch();
  const {
    countries,
    getCountriesLoading,
    states,
    getStatesLoading,
    cities,
    getCitiesLoading,
  } = useSelector((state) => state.location);

  const formik = useFormik({
    initialValues: {
      country: "",
      state: "",
      city: "",
      title: "",
      description: "",
      photos: null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({}),
  });

  useEffect(() => {
    dispatch(getCountries({}));
  }, [dispatch]);

  return (
    <CreateAdsStyle>
      <CreateAdsForm onSubmit={formik.handleSubmit}>
        <FormWrapper>
          <CreateAdsFormLabel>Country</CreateAdsFormLabel>
          <CreateAdsFormSelect
            name="country"
            value={formik.values.country}
            // {...formik.getFieldProps("country")}
            onChange={(e) => {
              formik.values.country = e.target.value;
              dispatch(getStates({ country: e.target.value }));
            }}
          >
            <option>
              {getCountriesLoading ? "Loading states..." : "Select"}
            </option>
            {countries.map((country) => (
              <option value={country.id} key={country.id}>
                {country.name}
              </option>
            ))}
          </CreateAdsFormSelect>
        </FormWrapper>
        <FormWrapper>
          <CreateAdsFormLabel>State</CreateAdsFormLabel>
          <CreateAdsFormSelect
            name="state"
            value={formik.values.state}
            {...formik.getFieldProps("state")}
            onChange={(e) => {
              formik.values.state = e.target.value;
              dispatch(getCities({ state: e.target.value }));
            }}
          >
            <option value="">
              {getStatesLoading ? "Loading states..." : "Select"}
            </option>
            {states.map((state) => (
              <option value={state.id} key={state.id}>
                {state.name}
              </option>
            ))}
          </CreateAdsFormSelect>
        </FormWrapper>
        <FormWrapper>
          <CreateAdsFormLabel>City</CreateAdsFormLabel>
          <CreateAdsFormSelect
            name="city"
            value={formik.values.city}
            {...formik.getFieldProps("city")}
          >
            <option value="">
              {getCitiesLoading ? "Loading Cities" : "Select"}
            </option>
            {cities.map((city) => (
              <option value={city.id} key={city.id}>
                {city.name}
              </option>
            ))}
          </CreateAdsFormSelect>
        </FormWrapper>
        <FormWrapper>
          <CreateAdsFormLabel>Title</CreateAdsFormLabel>
          <CreateAdsFormInput
            type="text"
            name="title"
            placeholder="Title"
            value={formik.values.title}
            {...formik.getFieldProps("title")}
          />
        </FormWrapper>
        <FormWrapper>
          <CreateAdsFormLabel>Description</CreateAdsFormLabel>
          <CreateAdsFormTextArea
            type="text"
            name="description"
            placeholder="Description"
            rows={10}
            value={formik.values.description}
            {...formik.getFieldProps("description")}
          />
        </FormWrapper>
        <FormWrapper>
          <CreateAdsFormInput
            type="file"
            name="photos"
            accept="image/*"
            multiple
            value={formik.values.photos}
            {...formik.getFieldProps("photos")}
          />
        </FormWrapper>
        <Button type="submit">Submit</Button>
      </CreateAdsForm>
    </CreateAdsStyle>
  );
};

export default CreateAds;
