using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularFinalProject_Mehedee.Models
{
    public class Trainee
    {
        public int TraineeID { get; set; }
        public string TraineeName { get; set; }
        public string Gender { get; set; }
        public DateTime DOB { get; set; }
        public string TraineeEmail { get; set; }
        public string TraineeContact { get; set; }

        public bool EducationalStatus { get; set; }
        public int CourseID { get; set; }


        //public string TraineeImage { get; set; }


        public virtual Course Course { get; set; }
    }
}
