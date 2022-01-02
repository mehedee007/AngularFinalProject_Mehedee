using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularFinalProject_Mehedee.Models;

namespace AngularFinalProject_Mehedee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TraineesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TraineesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Trainees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Trainee>>> GetTrainees()
        {
            return await _context.Trainees.ToListAsync();
        }

        // GET: api/Trainees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Trainee>> GetTrainee(int id)
        {
            var trainee = await _context.Trainees.FindAsync(id);

            if (trainee == null)
            {
                return NotFound();
            }

            return trainee;
        }

        // PUT: api/Trainees/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainee(int id, Trainee trainee)
        {
            if (id != trainee.TraineeID)
            {
                return BadRequest();
            }

            _context.Entry(trainee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TraineeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Trainees
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Trainee>> PostTrainee(Trainee trainee)
        {
            _context.Trainees.Add(trainee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrainee", new { id = trainee.TraineeID }, trainee);
        }

        // DELETE: api/Trainees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Trainee>> DeleteTrainee(int id)
        {
            var trainee = await _context.Trainees.FindAsync(id);
            if (trainee == null)
            {
                return NotFound();
            }

            _context.Trainees.Remove(trainee);
            await _context.SaveChangesAsync();

            return trainee;
        }

        [HttpGet]
        [Route("GetCourseList")]
        public IEnumerable<Course> GetCourses()
        {
            List<Course> lstCourse = new List<Course>();
            lstCourse = (from CourseList in _context.Courses select CourseList).ToList();
            return lstCourse;
        }
        private bool TraineeExists(int id)
        {
            return _context.Trainees.Any(e => e.TraineeID == id);
        }
    }
}
