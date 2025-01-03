'use client';
import React, { useState } from 'react';

interface Habit {
    id: number;
    name: string;
}

const ToDoListContainer: React.FC = () => {
    const [habits, setHabits] = useState<Habit[]>([]);
    const [habitName, setHabitName] = useState('');

    const handleAddHabit = () => {
        if (habitName.trim() !== '') {
            const newHabit: Habit = {
                id: Date.now(),
                name: habitName.trim()
            };

            setHabits(prevHabits => [...prevHabits, newHabit]);
            setHabitName('');
        }
    };

    return (
        <div className="p-8 rounded-md">
            <div className="mb-4">
                <input
                    type="text"
                    value={habitName}
                    onChange={e => setHabitName(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <button
                    onClick={handleAddHabit}
                    className="bg-yellow-400 text-white px-4 py-2 rounded ml-2"
                >
                    Add Habit
                </button>
            </div>
            <ul>
                {habits.map(habit => (
                    <li key={habit.id} className="mb-2">
                        {habit.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoListContainer;