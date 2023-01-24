import { ContainerBlock, Title } from 'module/Form/component/Utils';
import { Container } from './Container/Container';
import { TypeHelpItem } from './TypeHelpItem/TypeHelpItem';
import { allTypeOfHelp } from 'service/typeOfHelp/dataFromTypeOfHelp';
const allTypes = allTypeOfHelp();

export const TypeHelp = ({ selectedTypes, options }) => {
  const inValid =
    (options?.errors?.typeHelp && options?.touched?.typeHelp) ||
    (options?.errors?.typeHelp && options.isSubmitting);

  return (
    <ContainerBlock line={true}>
      <Title text="Вид допомоги:" $inValid={inValid} />
      <Container>
        {allTypes.map(data => {
          const isTypeSelected = selectedTypes?.find(s => s === data.name);
          return <TypeHelpItem key={data.name} isSelected={isTypeSelected} data={data} />;
        })}
      </Container>
    </ContainerBlock>
  );
};
