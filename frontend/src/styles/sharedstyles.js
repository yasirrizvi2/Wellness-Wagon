// styles/sharedStyles.js
export const sharedStyles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '0.5rem',
    color: '#2f855a',
    fontSize: '2rem',
  },
  subtitle: {
    marginBottom: '1.5rem',
    color: '#4a5568',
    fontSize: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#38a169',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  linkText: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#4a5568',
  },
  linkButton: {
    marginLeft: '0.5rem',
    background: 'none',
    border: 'none',
    color: '#3182ce',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
};
