using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularFinalProject_Mehedee.Migrations
{
    public partial class AddDateandBoolean : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DOB",
                table: "Trainees",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "EducationalStatus",
                table: "Trainees",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DOB",
                table: "Trainees");

            migrationBuilder.DropColumn(
                name: "EducationalStatus",
                table: "Trainees");
        }
    }
}
