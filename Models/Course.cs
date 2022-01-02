using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularFinalProject_Mehedee.Models
{
    public class Course
    {
        public int CourseID { get; set; }
        public string CourseName { get; set; }
        public string CourseDuration { get; set; }
        //public string CourseFee { get; set; }

        public virtual ICollection<Trainee> Trainees { get; set; }
    }
}
