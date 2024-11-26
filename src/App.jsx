import './App.css'
import { useState } from 'react'

import { DndContext, closestCorners } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './components/Column'
import ColumnLeft from './components/ColumnLeft'
import ColumnRight from './components/ColumnRight'

function App() {

  const taskcards = [
    { id: 1, place: "Home", title: "Childcare Helpers(kids)", daily: "yes" },
    { id: 2, place: "Home", title: "Cleaning", daily: "no" },
    { id: 3, place: "Home", title: "Dishes", daily: "yes" },
    { id: 4, place: "Home", title: "Dry Cleaning", daily: "no" },
    { id: 5, place: "Home", title: "Garbage", daily: "yes" },
    { id: 6, place: "Home", title: "Groceries", daily: "yes" },
    { id: 7, place: "Home", title: "Home Furnishings", daily: "no" },
    { id: 8, place: "Home", title: "Home Goods & Supplies", daily: "yes" },
    { id: 9, place: "Home", title: "Home Maintenance", daily: "yes" },
    { id: 10, place: "Home", title: "Home Purchase/Mortgage/Insurance", daily: "yes" },
    { id: 11, place: "Home", title: "Hosting", daily: "no" },
    { id: 12, place: "Home", title: "Laundry", daily: "yes" },
    { id: 13, place: "Home", title: "Lawn & Plants", daily: "no" },
    { id: 14, place: "Home", title: "Meals(weekday breakfast)", daily: "yes" },
    { id: 15, place: "Home", title: "Meals(kids, school lunch)", daily: "yes" },
    { id: 16, place: "Home", title: "Meals(weekday dinner)", daily: "yes" },
    { id: 17, place: "Home", title: "Meals(weekend)", daily: "no" },
    { id: 18, place: "Home", title: "Memories & Photos", daily: "no" },
    { id: 19, place: "Home", title: "Memories & Photos", daily: "no" },
    { id: 20, place: "Home", title: "Money Manager", daily: "no" },
    { id: 21, place: "Home", title: "Storage, Garage & Seasonal Items", daily: "no" },
    { id: 22, place: "Home", title: "Tidying Up, Organizing & Donations", daily: "yes" },
    { id: 23, place: "Home", title: "Mail", daily: "yes" },
    { id: 24, place: "Out", title: "Auto", daily: "no" },
    { id: 25, place: "Out", title: "Birthday Celebrations (other kids)", daily: "no" },
    { id: 26, place: "Out", title: "Calendar Keeper", daily: "yes" },
    { id: 27, place: "Out", title: "Cash & Bills", daily: "yes" },
    { id: 27, place: "Out", title: "Charity, Community Service", daily: "no" },
    { id: 28, place: "Out", title: "Civic Engagement & Cultural Enrichment", daily: "no" },
    { id: 29, place: "Out", title: "Electronics & IT", daily: "no" },
    { id: 30, place: "Out", title: "Extracurricular (kids, non-sports", daily: "yes" },
    { id: 31, place: "Out", title: "Extracurricular (kids, sports", daily: "yes" },
    { id: 32, place: "Out", title: "First Aid, Safety and Emergency", daily: "no" },
    { id: 33, place: "Out", title: "Packing & Unpacking (Kids, Local)", daily: "yes" },
    { id: 34, place: "Out", title: "Packing & Unpacking (Travel)", daily: "no" },
    { id: 35, place: "Out", title: "Points, Miles & Coupons", daily: "no" },
    { id: 36, place: "Out", title: "Returns & Store Credits", daily: "no" },
    { id: 37, place: "Out", title: "School Breaks (Kids; non-summer)", daily: "no" },
    { id: 38, place: "Out", title: "School Breaks (Kids; summer)", daily: "no" },
    { id: 39, place: "Out", title: "School Forms (Kids)", daily: "no" },
    { id: 40, place: "Out", title: "Social Plans (Couples)", daily: "no" },
    { id: 41, place: "Out", title: "Transportation (kids)", daily: "yes" },
    { id: 42, place: "Out", title: "Travel", daily: "no" },
    { id: 43, place: "Out", title: "Tutoring & Coaching", daily: "no" },
    { id: 44, place: "Out", title: "Weekend Plans (family)", daily: "no" },
    { id: 45, place: "Caregiving", title: "Bathing & Grooming (kids)", daily: "yes" },
    { id: 46, place: "Caregiving", title: "Bathing & Grooming (P1)", daily: "no" },
    { id: 47, place: "Caregiving", title: "Bedtime Routine (kids)", daily: "yes" },
    { id: 48, place: "Caregiving", title: "Birth Control", daily: "no" },
    { id: 49, place: "Caregiving", title: "Clothes & Accessories (kids)", daily: "no" },
    { id: 50, place: "Caregiving", title: "Dental (kids)", daily: "no" },
    { id: 51, place: "Caregiving", title: "Diapering & Potty Training (kids)", daily: "yes" },
    { id: 52, place: "Caregiving", title: "Estate Planning & Life Insurance", daily: "no" },
    { id: 53, place: "Caregiving", title: "Friendships & Social Media (kids)", daily: "yes" },
    { id: 54, place: "Caregiving", title: "Grooming & Wardrobe (P2)", daily: "no" },
    { id: 55, place: "Caregiving", title: "Health Insurance", daily: "no" },
    { id: 56, place: "Caregiving", title: "Homework Projects & School Supplies (kids)", daily: "yes" },
    { id: 57, place: "Caregiving", title: "Medical & Healthy Living (kids)", daily: "yes" },
    { id: 58, place: "Caregiving", title: "Morning Routine (kids)", daily: "yes" },
    { id: 59, place: "Caregiving", title: "Parents & In-Laws", daily: "no" },
    { id: 60, place: "Caregiving", title: "Pets", daily: "yes" },
    { id: 61, place: "Caregiving", title: "School Service (kids)", daily: "no" },
    { id: 62, place: "Caregiving", title: "School-Transitions (kids)", daily: "no" },
    { id: 63, place: "Caregiving", title: "Self-Care (P1)", daily: "no" },
    { id: 64, place: "Caregiving", title: "Self-Care (P2)", daily: "no" },
    { id: 65, place: "Caregiving", title: "Special Needs & Mental Health(kids)", daily: "yes" },
    { id: 66, place: "Caregiving", title: "Teacher Communication (kids)", daily: "yes" },
    { id: 67, place: "Magic", title: "Adult Friendships (P1)", daily: "no" },
    { id: 68, place: "Magic", title: "Adult Friendships (P2)", daily: "no" },
    { id: 69, place: "Magic", title: "Birthday Celebration (your kids)", daily: "no" },
    { id: 70, place: "Magic", title: "Extended Family", daily: "no" },
    { id: 71, place: "Magic", title: "Fun! & Playing (kids)", daily: "no" },
    { id: 72, place: "Magic", title: "Gestures of Love (kids)", daily: "no" },
    { id: 73, place: "Magic", title: "Gifts (family)", daily: "no" },
    { id: 74, place: "Magic", title: "Gifts (vips)", daily: "no" },
    { id: 75, place: "Magic", title: "Hard Questions (kids)", daily: "no" },
    { id: 76, place: "Magic", title: "Holiday Cards", daily: "no" },
    { id: 77, place: "Magic", title: "Holidays", daily: "no" },
    { id: 78, place: "Magic", title: "Informal Education (kids)", daily: "no" },
    { id: 79, place: "Magic", title: "Magical Beans (kids)", daily: "no" },
    { id: 80, place: "Magic", title: "Marriage & Romance", daily: "no" },
    { id: 81, place: "Magic", title: "Middle of the Night Comfort (kids)", daily: "yes" },
    { id: 82, place: "Magic", title: "Partner Coach", daily: "no" },
    { id: 83, place: "Magic", title: "Showing Up & Participating", daily: "no" },
    { id: 84, place: "Magic", title: "Spirituality", daily: "no" },
    { id: 85, place: "Magic", title: "Thank You Notes", daily: "no" },
    { id: 86, place: "Magic", title: "Values & Good Deeds(kids)", daily: "no" },
    { id: 87, place: "Magic", title: "Watching (kids)", daily: "yes" },
    { id: 88, place: "Magic", title: "Discipline & Screen Time (kids)", daily: "yes" },
    { id: 89, place: "Wild", title: "Aging/Ailing Parent", daily: "no" },
    { id: 90, place: "Wild", title: "Death", daily: "no" },
    { id: 91, place: "Wild", title: "First Year of Infant's Life", daily: "no" },
    { id: 92, place: "Wild", title: "Home Renovations", daily: "no" },
    { id: 93, place: "Wild", title: "Serious Illness", daily: "no" },
    { id: 94, place: "Wild", title: "Glitch In The Matrix / Daily Disruption", daily: "no" },
    { id: 95, place: "Wild", title: "Job Loss & Money Problems", daily: "no" },
    { id: 96, place: "Wild", title: "Moving", daily: "no" },
    { id: 97, place: "Wild", title: "New Job", daily: "no" },
    { id: 98, place: "Wild", title: "Welcoming A Child Into The Home", daily: "no" },
    { id: 99, place: "Unicorn Space", title: "Unicorn Space (P1)", daily: "no" },
    { id: 100, place: "Unicorn Space", title: "Unicorn Space (P2)", daily: "no" }
  ]


  const [tasks, setTasks] = useState(taskcards)


  const [lisaTasks, setLisaTasks] = useState([
  ])

  const [alexTasks, setAlexTasks] = useState([
  ])

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = event => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      return arrayMove(tasks, originalPos, newPos);
    })
  }

  return (
    <>
      <h1>Fair Play @ nine911</h1>
      <DndContext
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}>
        <div className="column-container">
          <ColumnLeft tasks={lisaTasks} />
          <Column tasks={tasks} />
          <ColumnRight tasks={alexTasks} />
        </div>
      </DndContext>
    </>
  )
}

export default App
