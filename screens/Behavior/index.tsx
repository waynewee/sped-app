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

const studentScore: StudentAttendance = {
  "1": {
    score: 0,
  },
  "2": {
    score: 0,
  },
  "3": {
    score: 0,
  },
};

export const BehaviorScreen: FunctionComponent = () => {
  const [scores, setScores] = useState(studentScore);

  return (
    <View>
      <Text>Behavior</Text>
      {students.map((student) => {
        return (
          <TouchableOpacity
            onPress={() => {
              setScores({
                ...scores,
                [student.id]: {
                  ...scores[student.id],
                  score: scores[student.id].score + 1,
                },
              });
            }}
          >
            <View>
              <Text>{student.name}</Text>
              <Text style={{ fontSize: 32 }}>
                {[...Array(scores[student.id].score).keys()].reduce(
                  (acc: string, curr: number) => {
                    return (acc += "⋆");
                  },
                  ""
                )}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
