import theme from 'theme';

export const defaultProps = theme;

// eslint-disable-next-line consistent-return
export function transition(enableTransitions = defaultProps['$enable-transitions'], ...args) {
  if (enableTransitions && args.length) {
    return `
      transition: ${args.join(' ')};
    `;
  }
  return '';
}

export function transform(enableTransitions = defaultProps['$enable-transitions'], ...args) {
  if (enableTransitions && args.length) {
    return `
      transform: ${args.join(' ')};
    `;
  }
  return '';
}

export function filter(enableTransitions = defaultProps['$enable-transitions'], ...args) {
  if (enableTransitions && args.length) {
    return `
      filter: ${args.join(' ')};
    `;
  }
  return '';
}

export default {
  transition,
  transform,
  filter,
};
