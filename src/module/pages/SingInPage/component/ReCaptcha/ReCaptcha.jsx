import ReCAPTCHA from 'react-google-recaptcha';
import { useReCaptchaSize } from '../../hooks';
import { CaptchaWrapp } from '../../SingInPage.styled';

export const ReCaptcha = ({ setValues, setValidCaptcha }) => {
  const [recaptchaRef, size] = useReCaptchaSize();
  return (
    <>
      <CaptchaWrapp>
        <ReCAPTCHA
          sitekey="6LdXYb8iAAAAACvYsBIrtwFpsCRfG_GYvMEt1BcY"
          size={size}
          ref={recaptchaRef}
          onChange={captcha => {
            setValidCaptcha(captcha);
            setValues(captcha);
          }}
        />
      </CaptchaWrapp>
    </>
  );
};
