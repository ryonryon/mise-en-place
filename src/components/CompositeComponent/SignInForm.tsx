import styled from '@emotion/styled';
import * as React from 'react';
import { FlatButton } from '../Button/FlatButton';
import InputType from '../Input/input-type';
import { TextInputWithValidation } from '../Input/TextInputWithValidation';

const StyledSignInForm = styled.div`
  padding: 16px;
`;

export const SignInForm = () => {
  const givenNameValidation: [Function, string][] = [
    [(val: string): boolean => 0 !== val.length && !val.match(/^[a-z]+(\s?[a-z]?)*$/), "The given name isn't valid."]
  ];
  const lastNameValidation: [Function, string][] = [
    [(val: string): boolean => 0 !== val.length && !val.match(/^[a-z]+(\s?[a-z]?)*$/), "The last name isn't valid."]
  ];
  const phoneNumverValidation: [Function, string][] = [
    [
      (val: string): boolean =>
        0 !== val.length &&
        !val.match(
          /(^[0-9]{3}[0-9]{3}[0-9]{4}$)|(^[0-9]{3}-{1}[0-9]{3}-{1}[0-9]{4}$)|(^\({1}[0-9]{3}\){1}[0-9]{3}[0-9]{4}$)/
        ),
      "The phone number isn't valid."
    ]
  ];
  const emailValidations: [Function, string][] = [
    [
      (val: string): boolean => 0 !== val.length && !val.match(/^[0-9a-z_./?-]+@([0-9a-z-]+\.)+[0-9a-z-]+$/),
      "The email address isn't valid."
    ]
  ];
  const passwordValidations: [Function, string][] = [
    [(val: string): boolean => 0 !== val.length && val.length < 8, 'Password has to be more than 8 letters.'],
    [
      (val: string): boolean => (0 !== val.length && !val.match(/[A-Z]/) ? true : false),
      'There has to be at least one upper-case letter.'
    ],
    [
      (val: string): boolean => (0 !== val.length && !val.match(/[a-z]/) ? true : false),
      'There has to be at least one lower-case letter.'
    ],
    [
      (val: string): boolean => (0 !== val.length && !val.match(/\d/) ? true : false),
      'There has to be at least one number.'
    ],
    [
      (val: string): boolean => (0 !== val.length && !val.match(/[\@\#\$\%\^\&\*\!\?]/) ? true : false),
      'There has to be at least one Sign. eg. @#$%^&*!?'
    ]
  ];
  return (
    <StyledSignInForm>
      <TextInputWithValidation validations={givenNameValidation} placeholder="Given Name" />
      <TextInputWithValidation validations={lastNameValidation} placeholder="Last Name" />
      <TextInputWithValidation validations={phoneNumverValidation} type={InputType.TEL} placeholder="Phone Number" />
      <TextInputWithValidation validations={emailValidations} type={InputType.EMAIL} placeholder="Email" />
      <TextInputWithValidation validations={passwordValidations} type={InputType.PASSWORD} placeholder="Password" />
      <FlatButton width={'72%'}>Sign In</FlatButton>
    </StyledSignInForm>
  );
};
