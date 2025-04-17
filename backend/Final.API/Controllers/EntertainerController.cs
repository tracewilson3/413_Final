using Microsoft.AspNetCore.Mvc;
using Final.API.Data;
using Microsoft.EntityFrameworkCore;

namespace Final.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    
    public class EntertainerController : ControllerBase
        {
            private FinalDbContext _context;
            
            
            public EntertainerController(FinalDbContext temp)
            {
                _context = temp;
            }
            
            // GET: api/entertainers/summaries
            [HttpGet("summaries")]
            public async Task<IActionResult> GetEntertainerSummaries()
            {
                var summaries = await _context.Entertainers
                    .Select(e => new
                    {
                        entertainerID = e.EntertainerID,
                        entStageName = e.EntStageName,
                        bookingCount = _context.Engagements.Count(en => en.EntertainerID == e.EntertainerID),
                        lastBookedDate = _context.Engagements
                            .Where(en => en.EntertainerID == e.EntertainerID)
                            .OrderByDescending(en => en.StartDate)
                            .Select(en => en.StartDate)
                            .FirstOrDefault()
                    })
                    .ToListAsync();

                return Ok(summaries);
            }
            
            // GET: api/entertainers/{id}
            [HttpGet("{id}")]
            public async Task<IActionResult> GetEntertainerById(int id)
            {
                var entertainer = await _context.Entertainers
                    .FirstOrDefaultAsync(e => e.EntertainerID == id);

                if (entertainer == null)
                {
                    return NotFound();
                }

                return Ok(entertainer);
            }
            

            [HttpPost("AddEntertainer")]
            public IActionResult AddEntertainer([FromBody] Entertainer newEntertainer)
            {
                _context.Entertainers.Add(newEntertainer);
                _context.SaveChanges();
                return Ok(newEntertainer);
            }
            [HttpPut("UpdateEntertainer/{EntertainerID}")]
            public IActionResult UpdateEntertainer(int EntertainerID, [FromBody] Entertainer updatedEntertainer)
            {
                var existingEntertainer= _context.Entertainers.Find(EntertainerID);
                
                existingEntertainer.EntStageName = updatedEntertainer.EntStageName;
                existingEntertainer.EntSSN = updatedEntertainer.EntSSN;
                existingEntertainer.EntStreetAddress=updatedEntertainer.EntStreetAddress;
                existingEntertainer.EntCity = updatedEntertainer.EntCity;
                existingEntertainer.EntState = updatedEntertainer.EntState;
                existingEntertainer.EntZipCode = updatedEntertainer.EntZipCode;
                existingEntertainer.EntPhoneNumber = updatedEntertainer.EntPhoneNumber;
                existingEntertainer.EntWebPage = updatedEntertainer.EntWebPage;
                existingEntertainer.EntEmailAddress = updatedEntertainer.EntEmailAddress;
                existingEntertainer.DateEntered = updatedEntertainer.DateEntered;
                
                _context.Update(existingEntertainer);
                _context.SaveChanges();
                return Ok(existingEntertainer);
            }
            
            [HttpDelete("DeleteEntertainer/{EntertainerID}")]
            public IActionResult DeleteEntertainer(int EntertainerID)
            {
                var entertainer = _context.Entertainers.Find(EntertainerID);
                if (entertainer == null)
                {
                    return NotFound(new {message = "Not found"});
                }
                
                _context.Entertainers.Remove(entertainer);
                _context.SaveChanges();
                return NoContent();
            }
    }
}