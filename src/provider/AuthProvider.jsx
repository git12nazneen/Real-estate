import React from 'react';

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
     );
};

export default AuthProvider;