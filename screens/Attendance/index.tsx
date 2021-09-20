import React, { useState } from "react";

import { FunctionComponent } from "react";

import { View, Text, TouchableOpacity } from "react-native";

type StudentAttendance = Record<string, any>;

interface Student {
  name: string;
  id: string;
}

const students: Student[] = [
  {
    name: "Andrew",
    id: "1",
  },
  {
    name: "Bobby",
    id: "2",
  },
  {
    name: "Claire",
    id: "3",
  },
];

const studentsAttendance: StudentAttendance = {
  "1": {
    datesAbsent: {},
  },
  "2": {
    datesAbsent: {},
  },
  "3": {
    datesAbsent: {},
  },
};

export const AttendanceScreen: FunctionComponent = () => {
  const today = JSON.parse(JSON.stringify(new Date()));
  const date = today.split("T")[0];

  const [attendance, setAttendance] = useState(studentsAttendance);
  const [totalAbsent, setTotalAbsent] = useState(0);

  return (
    <View>
      <Text>Total Absent today: {totalAbsent}</Text>
      {students.map((student) => {
        return (
          <TouchableOpacity
            onPress={() => {
              setAttendance({
                ...attendance,
                [student.id]: {
                  ...attendance[student.id],
                  datesAbsent: {
                    ...attendance[student.id].datesAbsent,
                    [date]: !attendance[student.id].datesAbsent[date],
                  },
                },
              });

              setTotalAbsent(
                attendance[student.id].datesAbsent[date]
                  ? totalAbsent - 1
                  : totalAbsent + 1
              );
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: attendance[student.id].datesAbsent[date]
                  ? "red"
                  : "blue",
              }}
            >
              <Text style={{ fontSize: 30, color: "white" }}>
                {student.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <Text>Stats and shit</Text>
    </View>
  );
};
