import { useAppRouter } from "~/src/common/lib/router";

const truncatedPointName = (pointName: string, maxNameLength: number) => {
  return pointName.length > maxNameLength
    ? `${pointName.substring(0, maxNameLength)}...`
    : pointName;
};

function onPressPointCard(){
  const { push } = useAppRouter();    
  async function handlePressPointCard(id: number) {
      push(`/point/${id}`)
  }
  return {
      handlePressPointCard,
  };
};




export { truncatedPointName, onPressPointCard };
