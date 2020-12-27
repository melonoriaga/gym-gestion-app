import * as React from 'react';

import StudentContainer from '../components/Student/StudentContainer';

export default function StudentScreen({navigation}) {
  return (
    <StudentContainer
      pressStudentDetail={() => navigation.navigate('StudenDetail')}
      pressStudentZoneDetail={() => navigation.navigate('StudentZoneDetail')}
    />
  );
}
