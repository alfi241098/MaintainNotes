using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Cors;
using Maintain_notes;
using Maintain_notes.Models;

namespace Maintain_notes.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class NotesController : ApiController
    {
        MaintainNotes db = new MaintainNotes();

        // GET: api/Notes
        public IEnumerable<Note> GetNotes()
        {
            List<Note> obj = new List<Note>();
            return db.Notes.ToList<Note>();
        }

        // GET: api/Notes/5
        [ResponseType(typeof(Note))]
        public IHttpActionResult GetNote(int id)
        {
            Note note = db.Notes.Find(id);
            if (note == null)
            {
                return NotFound();
            }

            return Ok(note);
        }

        // PUT: api/Notes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutNote(int id, Note note)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != note.Id)
            {
                return BadRequest();
            }

            db.Entry(note).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Notes
        [HttpPost]
        public Note NewNote(Note note)
        {
            try
            {
                db.Configuration.ProxyCreationEnabled = false;
                Note note1 = new Note();
                note1.Value = note.Value;
                db.Notes.Add(note);
                db.SaveChanges();
                return note1;
            }
            catch (Exception)
            {
                throw;
            }
        }
        // DELETE: api/Notes/5
        [ResponseType(typeof(Note))]
        public IHttpActionResult DeleteNote(int id)
        {
            Note note = db.Notes.Find(id);
            if (note == null)
            {
                return NotFound();
            }

            db.Notes.Remove(note);
            db.SaveChanges();

            return Ok(note);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NoteExists(int id)
        {
            return db.Notes.Count(e => e.Id == id) > 0;
        }
    }
}