import React, { useEffect, useState } from "react";
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
import { createClassifieds } from "../../feature/classified/ClassifiedActions";
import { useNavigate } from "react-router-dom";
import FormError from "../../components/FormError/FormError";
import { getWallet } from "../../feature/wallet/WalletActions";

const CreateAds = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [
    totalPrice,
    // setTotalPrice
  ] = useState(process.env.REACT_APP_PRICE_PER_ADS);

  const { user } = useSelector((state) => state.user);
  const {
    countries,
    getCountriesLoading,
    states,
    getStatesLoading,
    cities,
    getCitiesLoading,
  } = useSelector((state) => state.location);
  const { wallet } = useSelector((state) => state.wallet);

  const { createClassifiedsLoading, createClassifiedsError } = useSelector(
    (state) => state.userClassified
  );

  const formik = useFormik({
    initialValues: {
      country: "",
      state: "",
      city: "",
      title: "",
      description: "",
      photos: [],
    },
    onSubmit: (values) => {
      dispatch(createClassifieds({ ...values, owner: user?.id }))
        .unwrap()
        .then(() => {
          navigate("/account");
        })
        .catch(() => alert(createClassifiedsError));
    },
    validationSchema: Yup.object({
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      photos: Yup.array().of(
        Yup.mixed()
          .test("fileSize", "File size is too large", (value) => {
            if (!value) return true; // Skip validation if no file is selected
            return value && value.size <= 10485760; // 10 MB
          })
          .test("fileType", "Invalid file type", (value) => {
            if (!value) return true; // Skip validation if no file is selected
            return ["image/jpeg", "image/jpg", "image/png"].includes(
              value.type
            );
          })
      ),
      // .min(1, "At least one image is required"),
    }),
  });

  useEffect(() => {
    dispatch(getCountries({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getWallet({ user }));
  }, [dispatch, user]);

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
          {formik.touched.country && formik.errors.country ? (
            <FormError>{formik.errors.country}</FormError>
          ) : null}
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
          {formik.touched.state && formik.errors.state ? (
            <FormError>{formik.errors.state}</FormError>
          ) : null}
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
          {formik.touched.city && formik.errors.city ? (
            <FormError>{formik.errors.city}</FormError>
          ) : null}
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
          {formik.touched.title && formik.errors.title ? (
            <FormError>{formik.errors.title}</FormError>
          ) : null}
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
          {formik.touched.description && formik.errors.description ? (
            <FormError>{formik.errors.description}</FormError>
          ) : null}
        </FormWrapper>
        <FormWrapper>
          <CreateAdsFormInput
            type="file"
            name="photos"
            accept="image/*"
            multiple
            onChange={(e) => {
              formik.values.photos = [...e.target.files];
            }}
          />
          {formik.touched.photos && formik.errors.photos ? (
            <FormError>{formik.errors.photos}</FormError>
          ) : null}
        </FormWrapper>
        <div>Order price: {totalPrice}</div>
        {wallet.balance < totalPrice && (
          <div style={{ color: "tomato" }}>Insufficient balance</div>
        )}
        <Button type="submit" disabled={wallet.balance < totalPrice}>
          {createClassifiedsLoading ? "Creating..." : "Submit"}
        </Button>
      </CreateAdsForm>
    </CreateAdsStyle>
  );
};

export default CreateAds;
