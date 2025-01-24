import { useAppRouter } from '~/src/common/lib/router';

export function onMakeSearchOrder() {
  const { push } = useAppRouter();
  async function handleOnMakeSearchOrder(text: string) {
    push(`/(search)/paginated?pointType=${text}`);
  }
  return {
    handleOnMakeSearchOrder,
  };
}
