import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { CheckBoxContainer } from './CreateHelp.styled';
import { CheckBox } from './CreateHelp.styled';
import { Button } from './CreateHelp.styled';
import { DeliveryCheck } from './CreateHelp.styled';
import { DeliverBox } from './CreateHelp.styled';
import { CheckBoxLabel } from './CreateHelp.styled';
import { Input } from './CreateHelp.styled';
import { Label } from './CreateHelp.styled';
import { StyledForm } from './CreateHelp.styled';
import { Title } from './CreateHelp.styled';
import { postPublication } from '../Service/api-service';

const CreateHelp = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (!value) {
      return;
    }

    const data = {
      ...value,
      dataType: 'help',
      status: 'idle',
    };

    postPublication(data);
  }, [value]);

  return (
    <>
      <Title>Створення заявки</Title>
      <Formik
        initialValues={{
          name: '',
          contact: '',
          info: '',
          type: [],
          typeOther: '',
          location: 'default',
          delivery: [],
        }}
        onSubmit={(values, { resetForm }) => {
          setValue(values);
          resetForm();
        }}
      >
        {({ values, isSubmitting }) => {
          const isDrive = values?.type?.find(type => type === 'Транспорт');
          const isOther = values?.type?.find(type => type === 'Інше');

          return (
            <StyledForm>
              <Label>
                *Кому потрібна допомога:
                <Input
                  type="name"
                  name="name"
                  required
                  placeholder="назва організації / імя "
                />
              </Label>
              <Label>
                *Контакт для звязку :
                <Input
                  type="text"
                  name="contact"
                  required
                  placeholder="номер телефону / аккаунт"
                />
              </Label>
              <Label>
                Інформація:
                <Input type="text" name="info" placeholder="деталі" />
              </Label>
              <Label>
                Вид допомоги:
                <CheckBoxContainer>
                  <CheckBoxLabel>
                    <CheckBox type="checkbox" value="Транспорт" name="type" />
                    Транспорт
                  </CheckBoxLabel>

                  <CheckBoxLabel>
                    <CheckBox
                      type="checkbox"
                      value="Іжа/Ліки/Одяг"
                      name="type"
                    />
                    Іжа/Ліки/Одяг
                  </CheckBoxLabel>
                  <CheckBoxLabel>
                    <CheckBox type="checkbox" value="Медицина" name="type" />
                    Медицина
                  </CheckBoxLabel>
                  <CheckBoxLabel>
                    <CheckBox type="checkbox" value="Тварини" name="type" />
                    Тварини
                  </CheckBoxLabel>
                  <CheckBoxLabel>
                    <CheckBox type="checkbox" value="Інше" name="type" /> Інше
                  </CheckBoxLabel>
                </CheckBoxContainer>
                {isOther && (
                  <Input
                    type="text"
                    id="typeOther"
                    name="typeOther"
                    required
                    placeholder="Інший вид допомоги"
                  />
                )}
              </Label>
              <Label>
                Локація:
                <Input component="select" name="location">
                  <option value="default">Виберіть локацію</option>
                  <option value="Правий берег"> Правий берег </option>
                  <option value="Лівий берег"> Лівий берег </option>
                  <option value="Усе місто"> Усе місто </option>
                  <option value="Область"> Область </option>
                </Input>
              </Label>

              {!isDrive && (
                <DeliverBox>
                  <DeliveryCheck type="checkbox" value="true" name="delivery" />
                  Можемо забрати самостійно (Частково)
                </DeliverBox>
              )}

              <Button type="submit">
                {isSubmitting ? (
                  <TailSpin
                    color="black"
                    height="20"
                    width="20"
                    ariaLabel="loading"
                  />
                ) : (
                  'Зарегеструвати'
                )}
              </Button>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateHelp;
