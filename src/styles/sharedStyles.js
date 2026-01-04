// Shared style constants - NYC Cool Girl SWE Aesthetic

export const SECTION_PADDING = {
  padding: 'var(--spacing-2xl) var(--spacing-md)',
  backgroundColor: 'var(--color-background)',
};

export const SECTION_PADDING_ALT = {
  padding: 'var(--spacing-2xl) var(--spacing-md)',
  backgroundColor: 'var(--color-background-alt)',
};

export const SECTION_CONTAINER = {
  maxWidth: '1400px',
  margin: '0 auto',
};

export const SECTION_HEADER = {
  fontSize: 'var(--size-sm)',
  fontWeight: 500,
  fontFamily: 'var(--font-body)',
  color: 'var(--color-text-tertiary)',
  letterSpacing: 'var(--letter-spacing-wide)',
  margin: 0,
  textTransform: 'uppercase',
};

export const SECTION_NUMBER = {
  fontSize: 'var(--size-xs)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: 'var(--letter-spacing-wide)',
  marginBottom: '8px',
};

export const SECTION_TITLE = {
  fontSize: 'var(--size-2xl)',
  fontFamily: 'var(--font-heading)',
  fontWeight: 500,
  color: 'var(--color-text-primary)',
  letterSpacing: '-0.02em',
  margin: 0,
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

export const PARAGRAPH_LARGE = {
  fontSize: 'var(--size-lg)',
  fontFamily: 'var(--font-body)',
  lineHeight: 1.8,
  color: 'var(--color-text-secondary)',
  margin: 0,
};

export const LABEL_STYLE = {
  fontSize: 'var(--size-xs)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: 'var(--letter-spacing-wide)',
  margin: '0 0 var(--spacing-xs) 0',
  textTransform: 'uppercase',
};

export const LINK_STYLE = {
  fontSize: 'var(--size-sm)',
  fontWeight: 500,
  color: 'var(--color-text-primary)',
  letterSpacing: 'var(--letter-spacing-normal)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all var(--transition-fast)',
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
  alignItems: 'start',
};

export const GRID_12_COLS = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: 'var(--spacing-sm)',
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

export const SKILL_TAG = {
  fontSize: 'var(--size-xs)',
  padding: '8px 16px',
  background: 'var(--color-accent-subtle)',
  color: 'var(--color-text-secondary)',
  letterSpacing: 'var(--letter-spacing-tight)',
};

export const ACCENT_TEXT = {
  fontFamily: 'var(--font-accent)',
  fontStyle: 'italic',
};
