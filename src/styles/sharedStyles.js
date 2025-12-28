// Shared style constants to eliminate redundancy across components

export const SECTION_PADDING = {
  backgroundColor: 'var(--color-background)',
  paddingTop: 'var(--spacing-xl)',
  paddingBottom: 'var(--spacing-xl)',
  paddingLeft: 'var(--spacing-md)',
  paddingRight: 'var(--spacing-md)',
};

export const SECTION_CONTAINER = {
  maxWidth: '1280px',
  margin: '0 auto',
};

export const SECTION_HEADER = {
  fontSize: 'var(--size-sm)',
  fontWeight: 500,
  fontFamily: 'var(--font-body)',
  color: 'var(--color-text-tertiary)',
  letterSpacing: 'var(--letter-spacing-normal)',
  margin: 0,
  textTransform: 'uppercase',
};

export const SECTION_HEADER_CONTAINER = {
  marginBottom: 'var(--spacing-lg)',
};

export const CONTENT_FLEX = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-sm)',
  maxWidth: '700px',
};

export const PARAGRAPH = {
  fontSize: 'var(--size-base)',
  fontFamily: 'var(--font-body)',
  lineHeight: 1.8,
  color: 'var(--color-text-secondary)',
  margin: 0,
};

export const LABEL_STYLE = {
  fontSize: 'var(--size-xs)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: 'var(--letter-spacing-normal)',
  margin: '0 0 var(--spacing-xs) 0',
};

export const LINK_STYLE = {
  fontSize: 'var(--size-base)',
  color: 'var(--color-text-primary)',
  textDecoration: 'none',
  paddingBottom: '2px',
  display: 'inline-block',
  cursor: 'pointer',
  transition: 'opacity 0.3s',
};

export const DIVIDER = {
  borderTop: '1px solid var(--color-border)',
  paddingTop: 'var(--spacing-sm)',
  marginTop: 'var(--spacing-sm)',
};

export const SECTION_WITH_TOP_BORDER = {
  ...SECTION_PADDING,
  borderTop: '1px solid var(--color-border)',
};

export const GRID_2_COLS = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 'var(--spacing-lg)',
  alignItems: 'center',
};

export const FLEX_CENTER = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const FLEX_COL_GAP = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-lg)',
};
